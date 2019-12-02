(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-caller-caller-module~pages-dashboard-dashboard-module"],{

/***/ "./src/app/pages/caller/caller.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/caller/caller.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding >\n    <div  style=\"text-align: center\"> \n    <div class=\"row\">\n        <div id=\"remote-container\" >\n        </div>\n        <div id=\"local-container\">\n        </div>\n    </div>\n    <div class=\"center-div\">\n        <div id=\"hangupButtons\">\n        </div>\n    </div>\n    <div class=\"row\" >\n        <div id=\"streamButtons\">\n        </div>\n    </div>\n    <div class=\"center-div\">\n        <ion-button color=\"danger\" id=\"decline\">Decline call</ion-button>\n        <ion-button color=\"success\" id=\"accept\">Accept call</ion-button>\n    </div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/caller/caller.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/caller/caller.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-image {\n  background: url('phone-ringing-gif-16.gif') 0 0/100% 100% no-repeat;\n  text-align: center; }\n\n.center-div {\n  bottom: 10px;\n  position: absolute;\n  margin: auto;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW5kbmVydmVzL0RvY3VtZW50cy9wb2MvaW9uaWMtNC1hdXRoYmFjay1hcGkvc3JjL2FwcC9wYWdlcy9jYWxsZXIvY2FsbGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1FQUFpRjtFQUNqRixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxsZXIvY2FsbGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJhY2tncm91bmQtaW1hZ2V7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcGhvbmUtcmluZ2luZy1naWYtMTYuZ2lmKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNlbnRlci1kaXZ7XG4gIGJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/caller/caller.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/caller/caller.page.ts ***!
  \*********************************************/
/*! exports provided: CallerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallerPage", function() { return CallerPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallerPage = /** @class */ (function () {
    // image = 'assets/phone-ringing-gif-16.gif'
    function CallerPage(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.bgimage = '../../../assets/phone-ringing-gif-16.gif';
    }
    CallerPage.prototype.ngOnInit = function () {
        console.log(this.navParams.data.invite, this.navParams.data.status);
        this.connectedSession1 = this.navParams.data.connection;
        if (this.navParams.data.status == 'incoming') {
            this.callInvitationProcess(this.navParams.data.invite);
        }
        else {
            var call = this.navParams.data.invite;
            this.setCallListeners(call);
            this.addHangupButton(call.getId());
            this.hideAcceptDeclineButtons();
        }
    };
    // Dismiss Login Modal
    CallerPage.prototype.dismissLogin = function () {
        this.modalController.dismiss();
    };
    // On Register button tap, dismiss login modal and open register modal
    CallerPage.prototype.showAcceptDeclineButtons = function () {
        document.getElementById('accept').style.display = 'inline-block';
        document.getElementById('decline').style.display = 'inline-block';
    };
    CallerPage.prototype.hideAcceptDeclineButtons = function () {
        console.log('call for hiding buttons');
        $("#accept").unbind("click");
        $("#decline").unbind("click");
        document.getElementById('accept').style.display = 'none';
        document.getElementById('decline').style.display = 'none';
    };
    CallerPage.prototype.callInvitationProcess = function (invitation) {
        var self = this;
        invitation.on("statusChange", function (statusChangeInfo) {
            console.error('statusChangeInfo :', statusChangeInfo);
            if (statusChangeInfo.status === apiRTC.INVITATION_STATUS_EXPIRED) {
                console.error('INVITATION_STATUS_EXPIRED');
                // Hide accept/decline buttons
                self.hideAcceptDeclineButtons();
                self.dismissLogin();
            }
        });
        //===============================================
        // ACCEPT OR DECLINE
        //===============================================
        // Display accept/decline buttons
        self.showAcceptDeclineButtons();
        // Add listeners
        $("#accept").click(function () {
            //==============================
            // ACCEPT CALL INVITATION
            //==============================
            invitation.accept()
                .then(function (call) {
                self.setCallListeners(call);
                self.addHangupButton(call.getId());
            });
            // Hide accept/decline buttons
            self.hideAcceptDeclineButtons();
        });
        $("#decline").click(function () {
            // Decline call invitation
            invitation.decline();
            // Hide accept/decline buttons
            self.dismissLogin();
            self.hideAcceptDeclineButtons();
        });
    };
    CallerPage.prototype.setCallListeners = function (call) {
        var self = this;
        call
            .on("localStreamAvailable", function (stream) {
            console.log('localStreamAvailable');
            //document.getElementById('local-media').remove();
            self.addStreamInDiv(stream, 'local-container', 'local-media-' + stream.getId(), { width: "160px", height: "120px" }, true);
            stream
                .on("stopped", function () {
                console.error("Stream stopped");
                $('#local-media-' + stream.getId()).remove();
                self.dismissLogin();
            });
        })
            .on("streamAdded", function (stream) {
            console.log('stream :', stream);
            var vh = window.innerHeight * 0.01;
            self.addStreamInDiv(stream, 'remote-container', 'remote-media-' + stream.getId(), { width: '100%', height: '100%' }, false);
        })
            .on('streamRemoved', function (stream) {
            // Remove media element
            document.getElementById('remote-media-' + stream.getId()).remove();
        })
            .on('userMediaError', function (e) {
            console.log('userMediaError detected : ', e);
            console.log('userMediaError detected with error : ', e.error);
            //Checking if tryAudioCallActivated
            if (e.tryAudioCallActivated === false) {
                $('#hangup-' + call.getId()).remove();
            }
        })
            .on('desktopCapture', function (e) {
            console.log('desktopCapture event : ', e);
            $('#hangup-' + call.getId()).remove();
        })
            .on('hangup', function () {
            $('#hangup-' + call.getId()).remove();
        });
    };
    CallerPage.prototype.addHangupButton = function (callId) {
        var self = this;
        $("#hangupButtons").append('<ion-button id="hangup-' + callId + '" (click)="hangupCall(' + callId + ')" color="danger" type="button">Leave call</ion-button>');
        setTimeout(function () {
            $("#hangup-" + callId).click(function () {
                // Decline call invitation
                self.hangupCall(callId);
            });
        }, 100);
    };
    CallerPage.prototype.addStreamInDiv = function (stream, divId, mediaEltId, style, muted) {
        var streamIsVideo = stream.hasVideo();
        console.error('addStreamInDiv - hasVideo? ' + streamIsVideo);
        var mediaElt = null, divElement = null, funcFixIoS = null, promise = null;
        if (streamIsVideo === 'false') {
            mediaElt = document.createElement("audio");
        }
        else {
            mediaElt = document.createElement("video");
        }
        mediaElt.id = mediaEltId;
        mediaElt.autoplay = true;
        mediaElt.muted = muted;
        mediaElt.style.width = style.width;
        mediaElt.style.height = style.height;
        funcFixIoS = function () {
            var promise = mediaElt.play();
            console.log('funcFixIoS');
            if (promise !== undefined) {
                promise.then(function () {
                    // Autoplay started!
                    console.log('Autoplay started');
                    console.error('Audio is now activated');
                    document.removeEventListener('touchstart', funcFixIoS);
                    $('#status').empty().append('iOS / Safari : Audio is now activated');
                }).catch(function (error) {
                    // Autoplay was prevented.
                    console.error('Autoplay was prevented');
                });
            }
        };
        stream.attachToElement(mediaElt);
        divElement = document.getElementById(divId);
        divElement.appendChild(mediaElt);
        promise = mediaElt.play();
        if (promise !== undefined) {
            promise.then(function () {
                // Autoplay started!
                console.log('Autoplay started');
            }).catch(function (error) {
                // Autoplay was prevented.
                if (apiRTC.osName === "iOS") {
                    console.info('iOS : Autoplay was prevented, activating touch event to start media play');
                    //Show a UI element to let the user manually start playback
                    //In our sample, we display a modal to inform user and use touchstart event to launch "play()"
                    document.addEventListener('touchstart', funcFixIoS);
                    console.error('WARNING : Audio autoplay was prevented by iOS, touch screen to activate audio');
                    $('#status').empty().append('WARNING : iOS / Safari : Audio autoplay was prevented by iOS, touch screen to activate audio');
                }
                else {
                    console.error('Autoplay was prevented');
                }
            });
        }
    };
    CallerPage.prototype.hangupCall = function (callId) {
        console.log("hangupCall :", callId);
        $('#hangup-' + callId).remove();
        //Getting call from ApiRTC call lists
        var call = this.connectedSession1.getCall(callId);
        call.hangUp();
        this.dismissLogin();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CallerPage.prototype, "invite", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CallerPage.prototype, "status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CallerPage.prototype, "connection", void 0);
    CallerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-caller',
            template: __webpack_require__(/*! ./caller.page.html */ "./src/app/pages/caller/caller.page.html"),
            styles: [__webpack_require__(/*! ./caller.page.scss */ "./src/app/pages/caller/caller.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]])
    ], CallerPage);
    return CallerPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-caller-caller-module~pages-dashboard-dashboard-module.js.map