(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");
/* harmony import */ var _caller_caller_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../caller/caller.page */ "./src/app/pages/caller/caller.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"], _caller_caller_page__WEBPACK_IMPORTED_MODULE_6__["CallerPage"]],
            entryComponents: [_caller_caller_page__WEBPACK_IMPORTED_MODULE_6__["CallerPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding no-bounce>\n  <div *ngFor=\"let user of listofUser\">\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img *ngIf=\"user.gender == 'm'\" src=\"{{user.image}}\">\n        <img *ngIf=\"user.gender == 'f'\" src=\"{{user.image}}\">\n      </ion-avatar>\n      <ion-label>{{user.name}}</ion-label>\n      <ion-label>{{user.phone}}</ion-label>\n      <span class=\"input-group-btn\">\n          <ion-button id=\"callAudio\" (click)=\"audioCall(user)\">\n            <ion-icon ios=\"ios-call\" md=\"md-call\"></ion-icon>\n          </ion-button>\n          <ion-button id=\"callVideo\" (click)=\"videoCall(user)\">\n              <ion-icon ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\n            </ion-button>\n      </span>\n    </ion-item>\n  </div>\n  <legend id=\"my-number\"></legend>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-dashboard body > .container {\n  padding: 60px 15px 0;\n  color: #ffffff;\n  min-height: calc(100% - 44px); }\n\napp-dashboard .footer > .container {\n  padding-right: 15px;\n  padding-left: 15px; }\n\napp-dashboard .footer .copy {\n  padding-right: 20px;\n  line-height: 28px;\n  font-family: Roboto;\n  font-weight: 200;\n  font-size: 12px;\n  color: #FFF; }\n\napp-dashboard .footer .copy img {\n  height: 26px;\n  margin-left: 0;\n  vertical-align: middle; }\n\napp-dashboard code {\n  font-size: 80%; }\n\napp-dashboard #accept {\n  display: none; }\n\napp-dashboard #decline {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW5kbmVydmVzL0RvY3VtZW50cy9wb2MvaW9uaWMtNC1hdXRoYmFjay1hcGkvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsNkJBQTZCLEVBQUE7O0FBSnJDO0VBT1EsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQVIxQjtFQVdRLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQWhCbkI7RUFrQlEsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0IsRUFBQTs7QUFwQjlCO0VBc0JRLGNBQWMsRUFBQTs7QUF0QnRCO0VBMEJRLGFBQWEsRUFBQTs7QUExQnJCO0VBNkJRLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWRhc2hib2FyZHtcbiAgICBib2R5ID4gLmNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDYwcHggMTVweCAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XG4gICAgICB9XG4gICAgICAuZm9vdGVyID4gLmNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICAgIC5mb290ZXIgLmNvcHkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogI0ZGRjt9XG4gICAgICAuZm9vdGVyIC5jb3B5IGltZyB7XG4gICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxuICAgICAgY29kZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAjYWNjZXB0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgI2RlY2xpbmV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _caller_caller_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../caller/caller.page */ "./src/app/pages/caller/caller.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var STATE_WAIT = "wait";
var LABEL_CALL = "Call";
var COLOR_CALL = "#5cb85c";
var DashboardPage = /** @class */ (function () {
    function DashboardPage(menu, authService, alertService, modalController) {
        this.menu = menu;
        this.authService = authService;
        this.alertService = alertService;
        this.modalController = modalController;
        this.listofUser = [
        //   { name:"ROhit",
        //     phone:"9876567890",
        //     online:true,
        //     oneSignal:'ohsodhcosdcho',
        //     gender:'m',
        //     image:"assets/img_avatar.png"},
        //     { name:"Sahil",
        //     phone:"9876567890",
        //     online:true,
        //     gender:'m',
        //     image:"assets/img_avatar.png",
        //     oneSignal:'ohsodhcosdcho'},
        //     { name:"Arjun",
        //     phone:"9876567890",
        //     online:false,
        //     gender:'m',
        //     image:"assets/img_avatar.png",
        //     oneSignal:'ohsodhcosdcho'},
        //     { name:"Gayatri",
        //     phone:"9876567890",
        //     online:true,
        //     gender:'f',
        //     image:"assets/img_avatar2.png",
        //     oneSignal:'ohsodhcosdcho'},
        ];
        this.menu.enable(true);
        this.ua = new apiRTC.UserAgent({
            uri: 'apzkey:2f01c207aa0bec13538601445ef07204'
        });
        this.infoLabel = "Registration Ongoing...";
        this.buttonLabel = LABEL_CALL;
        this.buttonColor = COLOR_CALL;
        this.state = STATE_WAIT;
    }
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        setTimeout(function () {
            _this.register();
        }, 5000);
    };
    DashboardPage.prototype.audioCall = function (user) {
        console.log(user);
        var contact = this.connectedSession.getOrCreateContact($("#number").val());
        var call = contact.call(null, { audioOnly: true });
        if (call !== null) {
            this.openModal(this.connectedSession, call, 'outgoing');
        }
        else {
            console.warn("Cannot establish call");
        }
    };
    DashboardPage.prototype.videoCall = function (user) {
        console.log(user);
        var contact = this.connectedSession.getOrCreateContact(Number(user.id));
        var call = contact.call();
        if (call !== null) {
            this.openModal(this.connectedSession, call, 'outgoing');
        }
        else {
            console.warn("Cannot establish call");
        }
    };
    DashboardPage.prototype.openModal = function (connection, invite, status) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('lknn');
                        return [4 /*yield*/, this.modalController.create({
                                component: _caller_caller_page__WEBPACK_IMPORTED_MODULE_4__["CallerPage"],
                                componentProps: {
                                    "connection": connection,
                                    "invite": invite,
                                    "status": status
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DashboardPage.prototype.selectPhonebookItem = function (idItem) {
        $("#number").val(idItem);
    };
    DashboardPage.prototype.updateAddressBook = function () {
        console.log("updateAddressBook");
        //var contactListArray = connectedSession.getContactsArray(),
        var contactListArray = this.connectedSession.getOnlineContactsArray(), i = 0;
        console.log("contactListArray :", contactListArray);
        //Cleaning addressBook list
        this.listofUser = [];
        var userconnected = {
            image: "assets/img_avatar.png",
            name: "Test",
            phone: "",
            online: true,
            gender: 'm',
            id: 0
        };
        for (i = 0; i < contactListArray.length; i += 1) {
            var user = contactListArray[i];
            console.log("userId :", user.getId());
            //Checking if connectedUser is not current user befire adding in addressBook list
            if (user.getId() !== apiRTC.session.apiCCId) {
                userconnected['name'] = userconnected['name'] + "-" + user.getId();
                userconnected['phone'] = user.getId();
                userconnected['id'] = user.getId();
                this.listofUser.push(userconnected);
            }
        }
    };
    //==============================
    // REGISTER
    //==============================
    DashboardPage.prototype.register = function () {
        var self = this;
        this.ua.register({
            userAcceptOnIncomingScreenSharingCall: true
        }).then(function (session) {
            // Save session
            self.connectedSession = session;
            // Display user number
            document.getElementById('my-number').innerHTML = 'Your number is ' + self.connectedSession.id;
            self.connectedSession
                .on("contactListUpdate", function (updatedContacts) {
                console.log("MAIN - contactListUpdate", updatedContacts);
                self.updateAddressBook();
            })
                //==============================
                // WHEN A CONTACT CALLS ME
                //==============================
                .on('incomingCall', function (invitation) {
                self.openModal(self.connectedSession, invitation, 'incoming');
                //self.callInvitationProcess(invitation);
            })
                .on("incomingScreenSharingCall", function (call) {
                console.log("screenSharing received from :", call.getContact().id);
                //self.setCallListeners(call);
                self.openModal(self.connectedSession, call, 'outgoing');
                // self.addHangupButton(call.getId());
            })
                .on("incomingScreenSharingCallInvitation", function (invitation) {
                console.log("incomingScreenSharingCallInvitation ");
                self.openModal(self.connectedSession, invitation, 'incoming');
                //self.callInvitationProcess(invitation);
            });
        }).catch(function (error) {
            // error
            console.error('User agent registration failed', error);
        });
    };
    DashboardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/pages/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map