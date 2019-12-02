import { Component, OnInit, Input } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
declare var apiRTC;
declare var $ :any;

@Component({
  selector: 'app-caller',
  templateUrl: './caller.page.html',
  styleUrls: ['./caller.page.scss'],
})
export class CallerPage implements OnInit {
    @Input() invite: any;
    @Input() status: any;
    @Input() connection: any;
    connectedSession1: any;
    bgimage= '../../../assets/phone-ringing-gif-16.gif';

    constructor(
        private modalController: ModalController,
        private navParams: NavParams
    ) { }

    ngOnInit() {
        console.log(this.navParams.data.invite,this.navParams.data.status)
        this.connectedSession1 = this.navParams.data.connection;
        if(this.navParams.data.status == 'incoming'){
            this.callInvitationProcess(this.navParams.data.invite)
        }else{
            let call = this.navParams.data.invite
            this.setCallListeners(call)
            this.addHangupButton(call.getId())
            this.hideAcceptDeclineButtons();
        }
    }

  // Dismiss Login Modal
    dismissLogin() {
        this.modalController.dismiss();
    }

  // On Register button tap, dismiss login modal and open register modal
  
    showAcceptDeclineButtons() {
        document.getElementById('accept').style.display = 'inline-block';
        document.getElementById('decline').style.display = 'inline-block';
    } 

    hideAcceptDeclineButtons() {
        console.log('call for hiding buttons')
        $("#accept").unbind( "click" );
        $("#decline").unbind( "click" );
        document.getElementById('accept').style.display = 'none';
        document.getElementById('decline').style.display = 'none';
    }

    callInvitationProcess(invitation) {
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
                .then(function(call) {
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
    }

    setCallListeners(call) {
        var self = this;
        call
            .on("localStreamAvailable", function (stream) {
            console.log('localStreamAvailable');
            //document.getElementById('local-media').remove();
            self.addStreamInDiv(stream, 'local-container', 'local-media-' + stream.getId(), {width : "160px", height : "120px"}, true);
            stream
                .on("stopped", function () { //When client receives an screenSharing call from another user
                    console.error("Stream stopped");
                    $('#local-media-' + stream.getId()).remove();
                    self.dismissLogin()
                });
        })
        .on("streamAdded", function (stream) {
            console.log('stream :', stream);
            let vh = window.innerHeight * 0.01;
            self.addStreamInDiv(stream, 'remote-container', 'remote-media-' + stream.getId(), {width : '100%', height : '100%'}, false);
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
    }
    addHangupButton(callId) {
        var self = this;
        $("#hangupButtons").append('<ion-button id="hangup-' + callId + '" (click)="hangupCall(' + callId + ')" color="danger" type="button">Leave call</ion-button>');
        setTimeout(() => {
            $(`#hangup-${callId}`).click(function () {
                // Decline call invitation
                self.hangupCall(callId)
                
            });
        }, 100); 
    }

    addStreamInDiv(stream, divId, mediaEltId, style, muted) {
        var streamIsVideo = stream.hasVideo();
        console.error('addStreamInDiv - hasVideo? ' + streamIsVideo);

        var mediaElt = null,
            divElement = null,
            funcFixIoS = null,
            promise = null;

        if (streamIsVideo === 'false') {
            mediaElt = document.createElement("audio");
        } else {
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
                    document.addEventListener('touchstart',  funcFixIoS);
                    console.error('WARNING : Audio autoplay was prevented by iOS, touch screen to activate audio');
                    $('#status').empty().append('WARNING : iOS / Safari : Audio autoplay was prevented by iOS, touch screen to activate audio');
                } else {
                    console.error('Autoplay was prevented');
                }
            });
        }
    }

    hangupCall(callId) {
        console.log("hangupCall :", callId);
        $('#hangup-' + callId).remove();
        //Getting call from ApiRTC call lists
        var call = this.connectedSession1.getCall(callId);
        call.hangUp();
        this.dismissLogin();
    }

}
