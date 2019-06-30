(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-qr></app-qr>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/qr/qr.component.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/qr/qr.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-qr\">\n    <h1>jsQR Demo</h1>\n    <a id=\"githubLink\" href=\"https://github.com/cozmo/jsQR\"\n      >See jsQR on Github</a\n    >\n    <p>Angular QR code decoding</p>\n    <div id=\"loading-message\" *ngIf=\"!ready\">\n      {{ loadingMessage }}\n    </div>\n    <canvas #canvasElement id=\"canvas\" [hidden]=\"!ready\"></canvas>\n    <div id=\"output\" [hidden]=\"!ready\">\n      <div id=\"outputMessage\" [hidden]=\"codeFound\">No QR code detected.</div>\n      <div [hidden]=\"!codeFound\">\n        <b>Data:</b> <span id=\"outputData\">{{ qrCodeValue }}</span>\n      </div>\n    </div>\n    <!-- playsinline required to tell iOS safari we don't want fullscreen -->\n    <video #videoElement playsinline=\"true\"></video>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/worker-plugin/dist/loader.js!./src/app/qr.worker.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js!./src/app/qr.worker.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0-es5.worker.js"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'qr-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _qr_qr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qr/qr.component */ "./src/app/qr/qr.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _qr_qr_component__WEBPACK_IMPORTED_MODULE_4__["QrComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/qr/qr.component.scss":
/*!**************************************!*\
  !*** ./src/app/qr/qr.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Ropa+Sans);\n#main-qr {\n  font-family: \"Ropa Sans\", sans-serif;\n  color: #333;\n  max-width: 640px;\n  margin: 0 auto;\n  position: relative;\n}\nvideo {\n  display: none;\n}\n#githubLink {\n  position: absolute;\n  right: 0;\n  top: 12px;\n  color: #2d99ff;\n}\nh1 {\n  margin: 10px 0;\n  font-size: 40px;\n}\n#loading-message {\n  text-align: center;\n  padding: 40px;\n  background-color: #eee;\n}\n#canvas {\n  width: 100%;\n}\n#output {\n  margin-top: 20px;\n  background: #eee;\n  padding: 10px;\n  padding-bottom: 0;\n}\n#output div {\n  padding-bottom: 10px;\n  word-wrap: break-word;\n}\n#noQRFound {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9kZXY1L3FyLWZyb250L3FyLWFuZ3VsYXIvc3JjL2FwcC9xci9xci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXIvcXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOERBQUE7QUFJUjtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7QUNGRjtBREtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNGRjtBREtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNGRjtBREtBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBN0JTO0FDMkJYO0FES0E7RUFDRSxXQUFBO0FDRkY7QURLQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBdENTO0VBdUNULGFBQUE7RUFDQSxpQkFBQTtBQ0ZGO0FES0E7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9xci9xci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb3BhK1NhbnMpO1xuXG4kd2hpdGUtYmc6ICNlZWU7XG5cbiNtYWluLXFyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9wYSBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG52aWRlbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNnaXRodWJMaW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxMnB4O1xuICBjb2xvcjogIzJkOTlmZjtcbn1cblxuaDEge1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4jbG9hZGluZy1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtYmdcbn1cblxuI2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jb3V0cHV0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogJHdoaXRlLWJnO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuI291dHB1dCBkaXYge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4jbm9RUkZvdW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvcGErU2Fucyk7XG4jbWFpbi1xciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvcGEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMzMztcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudmlkZW8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZ2l0aHViTGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTJweDtcbiAgY29sb3I6ICMyZDk5ZmY7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuI2xvYWRpbmctbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuI2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jb3V0cHV0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbiNvdXRwdXQgZGl2IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuI25vUVJGb3VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/qr/qr.component.ts":
/*!************************************!*\
  !*** ./src/app/qr/qr.component.ts ***!
  \************************************/
/*! exports provided: QrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__1) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrComponent", function() { return QrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QrComponent = /** @class */ (function () {
    function QrComponent() {
        this.loadingMessage =
            "🎥 Unable to access video stream (please make sure you have a webcam enabled)";
        this.ready = false;
        this.codeFound = false;
        if (typeof Worker !== "undefined") {
            this.worker = new Worker(__webpack__worker__1, {  });
        }
        else {
            console.log("Web Workers are not supported in this environment");
            // You should add a fallback so that your program still executes correctly.
        }
    }
    QrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canvas = this.canvasElement.nativeElement.getContext("2d");
        navigator.mediaDevices
            .getUserMedia({ video: { facingMode: "environment" } })
            .then(function (stream) {
            _this.video.nativeElement.srcObject = stream;
            _this.video.nativeElement.play();
            /* https://developer.mozilla.org/fr/docs/Web/API/Window/requestAnimationFrame */
            requestAnimationFrame(function () { return _this.tick(); });
        });
        this.worker.onmessage = function (_a) {
            var data = _a.data;
            var code = data;
            if (code) {
                _this.drawLine(code.location.topLeftCorner, code.location.topRightCorner);
                _this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner);
                _this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner);
                _this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner);
                _this.codeFound = true;
                _this.qrCodeValue = code.data;
            }
            else {
                _this.codeFound = false;
                requestAnimationFrame(function () { return _this.tick(); });
            }
        };
    };
    QrComponent.prototype.drawLine = function (begin, end) {
        this.canvas.beginPath();
        this.canvas.moveTo(begin.x, begin.y);
        this.canvas.lineTo(end.x, end.y);
        this.canvas.lineWidth = 4;
        this.canvas.strokeStyle = "#FF3B58";
        this.canvas.stroke();
    };
    QrComponent.prototype.tick = function () {
        var _this = this;
        this.loadingMessage = "⌛ Loading video...";
        if (this.video.nativeElement.readyState ===
            this.video.nativeElement.HAVE_ENOUGH_DATA) {
            this.ready = true;
        }
        this.canvasElement.nativeElement.height = this.video.nativeElement.videoHeight;
        this.canvasElement.nativeElement.width = this.video.nativeElement.videoWidth;
        /* affiche l'image de la balise <video> */
        this.canvas.drawImage(this.video.nativeElement, 0, 0, this.canvasElement.nativeElement.width, this.canvasElement.nativeElement.height);
        if (this.canvasElement.nativeElement.width > 0 &&
            this.canvasElement.nativeElement.height > 0) {
            var imageData = this.canvas.getImageData(0, 0, this.canvasElement.nativeElement.width, this.canvasElement.nativeElement.height);
            this.worker.postMessage(imageData);
        }
        else {
            requestAnimationFrame(function () { return _this.tick(); });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoElement", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true })
    ], QrComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("canvasElement", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true })
    ], QrComponent.prototype, "canvasElement", void 0);
    QrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-qr",
            template: __webpack_require__(/*! raw-loader!./qr.component.html */ "./node_modules/raw-loader/index.js!./src/app/qr/qr.component.html"),
            styles: [__webpack_require__(/*! ./qr.component.scss */ "./src/app/qr/qr.component.scss")]
        })
    ], QrComponent);
    return QrComponent;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js!../qr.worker */ "./node_modules/worker-plugin/dist/loader.js!./src/app/qr.worker.ts")))

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

module.exports = __webpack_require__(/*! /home/ubuntu/dev5/qr-front/qr-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map