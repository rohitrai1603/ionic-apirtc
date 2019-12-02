import { Component, OnInit } from '@angular/core';
import { MenuController,ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';
import { CallerPage } from '../caller/caller.page';
declare var apiRTC;
declare var $ :any;

const STATE_WAIT = "wait";
const LABEL_CALL = "Call";
const COLOR_CALL = "#5cb85c";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    user: User;
    roomname: any;
    session: any;
    publisher: any;
    distantNumber:any;
    webRTCClient:any;
    infoLabel:any;
    buttonLabel:any;
    buttonColor:any;
    state:any;
    ua : any;
    connectedSession: any;
    listofUser =[]

    constructor(private menu: MenuController, private authService: AuthService, private alertService: AlertService,private modalController : ModalController) {
        this.menu.enable(true);
        this.ua = new apiRTC.UserAgent({
            uri: 'apzkey:2f01c207aa0bec13538601445ef07204'
        });
      
      this.infoLabel= "Registration Ongoing...";
      this.buttonLabel = LABEL_CALL;
      this.buttonColor = COLOR_CALL;
      this.state = STATE_WAIT;
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.register()
        }, 5000);
    }

    audioCall(user){
        console.log(user)
        var contact = this.connectedSession.getOrCreateContact($("#number").val());
        var call = contact.call(null, {audioOnly: true});
        if (call !== null) {
            this.openModal(this.connectedSession,call,'outgoing');
        } else {
            console.warn("Cannot establish call");
        }
    }
 
    videoCall(user){
        console.log(user)
        var contact = this.connectedSession.getOrCreateContact(Number(user.id));
        var call = contact.call();
        if (call !== null) {
            this.openModal(this.connectedSession,call,'outgoing');
        } else {
            console.warn("Cannot establish call");
        }
    }
    
    async openModal(connection, invite,status) {
        console.log('lknn')
        const modal = await this.modalController.create({
        component: CallerPage,
        componentProps: {
            "connection": connection,
            "invite": invite,
            "status": status
        }
        });
        return await modal.present();
    }

    updateAddressBook() {
        console.log("updateAddressBook");
        //var contactListArray = connectedSession.getContactsArray(),
        var contactListArray = this.connectedSession.getOnlineContactsArray(),i = 0;

        //Cleaning addressBook list
        this.listofUser =[]
        let userconnected ={
            image:"assets/img_avatar.png",
            name:"Test",
            phone:"",
            online:true,
            gender:'m',
            id:0
        }
        for (i = 0; i < contactListArray.length; i += 1) {
            var user = contactListArray[i];
            console.log("userId :", user.getId());
            //Checking if connectedUser is not current user befire adding in addressBook list
            if (user.getId() !== apiRTC.session.apiCCId) {
                userconnected['name'] =  `${userconnected['name']}-${user.getId()}`;
                userconnected['phone'] =  user.getId();
                userconnected['id'] =  user.getId();
                this.listofUser.push(userconnected)
            }
        }
    }



    //==============================
    // Register the user on apirtc
    //==============================
    register(){
        var self = this;
        this.ua.register({
            userAcceptOnIncomingScreenSharingCall : true
        }).then(function (session) {
            // Save session
            self.connectedSession = session;

            // Display user number
            document.getElementById('my-number').innerHTML = 'Your number is ' + self.connectedSession.id;

            self.connectedSession
                .on("contactListUpdate", function (updatedContacts) { //display a list of connected users
                    console.log("MAIN - contactListUpdate", updatedContacts);
                    self.updateAddressBook();
                })
                //==============================
                // WHEN A CONTACT CALLS ME
                //==============================
                .on('incomingCall', function (invitation) {
                    self.openModal(self.connectedSession,invitation,'incoming')
                    //self.callInvitationProcess(invitation);
                })
                .on("incomingScreenSharingCall", function (call) { //When client receives an screenSharing call from another user
                    console.log("screenSharing received from :", call.getContact().id);
                    //self.setCallListeners(call);
                    self.openModal(self.connectedSession,call,'outgoing')
                    // self.addHangupButton(call.getId());
                })
                .on("incomingScreenSharingCallInvitation", function (invitation) { //When client receives an screenSharing call from another user
                    console.log("incomingScreenSharingCallInvitation ");
                    self.openModal(self.connectedSession,invitation,'incoming')
                    //self.callInvitationProcess(invitation);
                });

        }).catch(function (error) {
            // error
            console.error('User agent registration failed', error);
        });
    }
}
