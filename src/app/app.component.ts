import { Component } from '@angular/core';

import { WindowRef } from './WindowRef';

//import * as variable from 'applePayButton'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApplPayDemo';
  messageInfo = "Hello World"

  constructor(private winRef:WindowRef)
  {
    console.log('Window object', winRef.nativeWindow);    

    if (winRef.nativeWindow.ApplePaySession && winRef.nativeWindow.ApplePaySession.canMakePayments())
      {
        console.log("apple session can make payments");
        this.messageInfo = "apple session can make payments";
      }
    else
    {
      console.log("apple session not found. can not make payments");
      this.messageInfo = "apple session not found. can not make payments";
    }
    if (winRef.nativeWindow.ApplePaySession) {

      console.log("apple session found");
      this.messageInfo = "apple session found";
      // var merchantIdentifier = 'example.com.store';
      // var promise = winRef.nativeWindow.ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
    }
    else
    {
      console.log("apple session not found");
    }
  }
  
  
  // function onApplePayButtonClicked() { 

  //   if (!ApplePaySession) {
  //       return;
  //   }
  // }
}



