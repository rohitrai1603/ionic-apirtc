import { Injectable } from '@angular/core';
import { OneSignal} from '@ionic-native/onesignal/ngx';
/*
  Generated class for the OnesignalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OnesignalProvider {

  constructor(public One: OneSignal) {
  
  }

  
 sendPush(id,name,apirtcid,action){
    console.log('This is the push id', [id])
    let notificationObj:any = {
      // include_player_ids: [id],
      // contents: {en: "New Passenger To Pick Up"},
        "app_id": "2624ab41-07fa-46ce-8a96-9c1433de3418",
        "contents": {"en": "English Messeage"},
        "data": {"name":name,"apiid":apirtcid,"action":action},
        "content_available":true,
        "included_segments": ["All"]

      };
  
  this.One.postNotification(notificationObj).then( good => {
        console.log(good);
        //alert("Notification Post Success:\n" + id);
        }, error => {
        console.log(error);
        // alert("Notification Post Failed:\n" + JSON.stringify(error));
        // alert("Notification Post Failed:\n" + id);
        });


    }
  
}
