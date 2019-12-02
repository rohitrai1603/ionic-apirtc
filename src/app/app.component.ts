import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { LocalNotifications,ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private localNotifications: LocalNotifications,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private oneSignal: OneSignal
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.setupPush();
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
      this.authService.getToken();
    });
  }

  logout() {
    this.authService.logout().subscribe(
      data => {
        this.alertService.presentToast(data['message']);        
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/landing');
      }
    );
  }

  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('2624ab41-07fa-46ce-8a96-9c1433de3418', '570808372448');
 
    // Notifcation was received in general
   
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      console.log('data.payload.title',data)
      // let msg = data.payload.body;
      // let title = data.payload.title;
      // let additionalData = data.payload.additionalData;
      //this.showAlert(title, msg, additionalData.task);
     // this.oneSignal.clearOneSignalNotifications()
      this.single_notification(data);

    });
    //this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;
      //this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None)
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
 
    this.oneSignal.endInit();
    this.oneSignal.getIds().then(id=>{
      console.log('onesignal',id);
    })

   
  }

  async showAlert(title, msg, task) {
    console.log('title, msg, task',title, msg, task)
    this.alertService.presentToast(msg);   
  }

  async single_notification(data) {
    // Schedule a single notification
    if(data.payload.additionalData.action == 'ring'){
      this.localNotifications.schedule({
        id: 4,
        text: data.payload.additionalData.name + " is calling",
        sound: 'file://sound.mp3',
        data: { secret: 'key_data' },
        autoClear :true,
        wakeup	:true,
        timeoutAfter: 3000,
        vibrate: true,
        actions: [ 
          { id: 'accept', title: 'Accept' },
          { id: 'decline',  title: 'Decline'  }]
      });
    }else{
      this.localNotifications.clearAll()
      setTimeout(() => {
        this.localNotifications.schedule({
          id: 5,
          text: "You Have Missed Call From "+ data.payload.additionalData.name,
          sound: 'file://sound.mp3',
          autoClear :true,
          wakeup	:true,
          vibrate: true
        });
      }, 1000);
      
    }
   
  }

}
